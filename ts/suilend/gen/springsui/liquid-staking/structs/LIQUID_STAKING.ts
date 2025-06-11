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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isLIQUID_STAKING(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::LIQUID_STAKING`;
}

export interface LIQUID_STAKINGFields {
  dummyField: ToField<"bool">;
}

export type LIQUID_STAKINGReified = Reified<
  LIQUID_STAKING,
  LIQUID_STAKINGFields
>;

/**
 * Move struct: `LIQUID_STAKING`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class LIQUID_STAKING implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::LIQUID_STAKING`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = LIQUID_STAKING.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::LIQUID_STAKING`;
  readonly $typeArgs: [];
  readonly $isPhantom = LIQUID_STAKING.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: LIQUID_STAKINGFields) {
    this.$fullTypeName = composeSuiType(
      LIQUID_STAKING.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::LIQUID_STAKING`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): LIQUID_STAKINGReified {
    return {
      typeName: LIQUID_STAKING.$typeName,
      fullTypeName: composeSuiType(
        LIQUID_STAKING.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::LIQUID_STAKING`,
      typeArgs: [] as [],
      isPhantom: LIQUID_STAKING.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        LIQUID_STAKING.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LIQUID_STAKING.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => LIQUID_STAKING.fromBcs(data),
      bcs: LIQUID_STAKING.bcs,
      fromJSONField: (field: any) => LIQUID_STAKING.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => LIQUID_STAKING.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LIQUID_STAKING.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LIQUID_STAKING.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        LIQUID_STAKING.fetch(client, id),
      new: (fields: LIQUID_STAKINGFields) => {
        return new LIQUID_STAKING([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LIQUID_STAKING.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<LIQUID_STAKING>> {
    return phantom(LIQUID_STAKING.reified());
  }
  static get p() {
    return LIQUID_STAKING.phantom();
  }

  static get bcs() {
    return bcs.struct("LIQUID_STAKING", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): LIQUID_STAKING {
    return LIQUID_STAKING.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): LIQUID_STAKING {
    if (!isLIQUID_STAKING(item.type)) {
      throw new Error("not a LIQUID_STAKING type");
    }

    return LIQUID_STAKING.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): LIQUID_STAKING {
    return LIQUID_STAKING.fromFields(LIQUID_STAKING.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): LIQUID_STAKING {
    return LIQUID_STAKING.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): LIQUID_STAKING {
    if (json.$typeName !== LIQUID_STAKING.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return LIQUID_STAKING.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): LIQUID_STAKING {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLIQUID_STAKING(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LIQUID_STAKING object`,
      );
    }
    return LIQUID_STAKING.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): LIQUID_STAKING {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isLIQUID_STAKING(data.bcs.type)
      ) {
        throw new Error(`object at is not a LIQUID_STAKING object`);
      }

      return LIQUID_STAKING.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LIQUID_STAKING.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<LIQUID_STAKING> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LIQUID_STAKING object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLIQUID_STAKING(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a LIQUID_STAKING object`);
    }

    return LIQUID_STAKING.fromSuiObjectData(res.data);
  }
}
