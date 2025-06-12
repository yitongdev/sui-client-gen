import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isGuardianSetAdded(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::update_guardian_set::GuardianSetAdded`;
}

export interface GuardianSetAddedFields {
  newIndex: ToField<"u32">;
}

export type GuardianSetAddedReified = Reified<GuardianSetAdded, GuardianSetAddedFields>;

/**
 * Move struct: `GuardianSetAdded`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::update_guardian_set`
 */
export class GuardianSetAdded implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::update_guardian_set::GuardianSetAdded`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = GuardianSetAdded.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::update_guardian_set::GuardianSetAdded`;
  readonly $typeArgs: [];
  readonly $isPhantom = GuardianSetAdded.$isPhantom;

  readonly newIndex: ToField<"u32">;

  private constructor(typeArgs: [], fields: GuardianSetAddedFields) {
    this.$fullTypeName = composeSuiType(
      GuardianSetAdded.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::update_guardian_set::GuardianSetAdded`;
    this.$typeArgs = typeArgs;

    this.newIndex = fields.newIndex;
  }

  static reified(): GuardianSetAddedReified {
    return {
      typeName: GuardianSetAdded.$typeName,
      fullTypeName: composeSuiType(
        GuardianSetAdded.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::update_guardian_set::GuardianSetAdded`,
      typeArgs: [] as [],
      isPhantom: GuardianSetAdded.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => GuardianSetAdded.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => GuardianSetAdded.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => GuardianSetAdded.fromBcs(data),
      bcs: GuardianSetAdded.bcs,
      fromJSONField: (field: any) => GuardianSetAdded.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => GuardianSetAdded.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => GuardianSetAdded.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => GuardianSetAdded.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => GuardianSetAdded.fetch(client, id),
      new: (fields: GuardianSetAddedFields) => {
        return new GuardianSetAdded([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return GuardianSetAdded.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<GuardianSetAdded>> {
    return phantom(GuardianSetAdded.reified());
  }
  static get p() {
    return GuardianSetAdded.phantom();
  }

  static get bcs() {
    return bcs.struct("GuardianSetAdded", {
      new_index: bcs.u32(),
    });
  }

  static fromFields(fields: Record<string, any>): GuardianSetAdded {
    return GuardianSetAdded.reified().new({ newIndex: decodeFromFields("u32", fields.new_index) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): GuardianSetAdded {
    if (!isGuardianSetAdded(item.type)) {
      throw new Error("not a GuardianSetAdded type");
    }

    return GuardianSetAdded.reified().new({
      newIndex: decodeFromFieldsWithTypes("u32", item.fields.new_index),
    });
  }

  static fromBcs(data: Uint8Array): GuardianSetAdded {
    return GuardianSetAdded.fromFields(GuardianSetAdded.bcs.parse(data));
  }

  toJSONField() {
    return {
      newIndex: this.newIndex,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): GuardianSetAdded {
    return GuardianSetAdded.reified().new({ newIndex: decodeFromJSONField("u32", field.newIndex) });
  }

  static fromJSON(json: Record<string, any>): GuardianSetAdded {
    if (json.$typeName !== GuardianSetAdded.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return GuardianSetAdded.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): GuardianSetAdded {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isGuardianSetAdded(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a GuardianSetAdded object`);
    }
    return GuardianSetAdded.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): GuardianSetAdded {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isGuardianSetAdded(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a GuardianSetAdded object`);
      }

      return GuardianSetAdded.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return GuardianSetAdded.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<GuardianSetAdded> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching GuardianSetAdded object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isGuardianSetAdded(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a GuardianSetAdded object`);
    }

    return GuardianSetAdded.fromSuiObjectData(res.data);
  }
}
