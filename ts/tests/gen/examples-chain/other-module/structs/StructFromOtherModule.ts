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

export function isStructFromOtherModule(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::other_module::StructFromOtherModule`;
}

export interface StructFromOtherModuleFields {
  dummyField: ToField<"bool">;
}

export type StructFromOtherModuleReified = Reified<
  StructFromOtherModule,
  StructFromOtherModuleFields
>;

/**
 * Move struct: `StructFromOtherModule`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::other_module`
 */
export class StructFromOtherModule implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::other_module::StructFromOtherModule`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = StructFromOtherModule.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::other_module::StructFromOtherModule`;
  readonly $typeArgs: [];
  readonly $isPhantom = StructFromOtherModule.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: StructFromOtherModuleFields) {
    this.$fullTypeName = composeSuiType(
      StructFromOtherModule.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::other_module::StructFromOtherModule`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): StructFromOtherModuleReified {
    return {
      typeName: StructFromOtherModule.$typeName,
      fullTypeName: composeSuiType(
        StructFromOtherModule.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::other_module::StructFromOtherModule`,
      typeArgs: [] as [],
      isPhantom: StructFromOtherModule.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        StructFromOtherModule.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        StructFromOtherModule.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => StructFromOtherModule.fromBcs(data),
      bcs: StructFromOtherModule.bcs,
      fromJSONField: (field: any) => StructFromOtherModule.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        StructFromOtherModule.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        StructFromOtherModule.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        StructFromOtherModule.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        StructFromOtherModule.fetch(client, id),
      new: (fields: StructFromOtherModuleFields) => {
        return new StructFromOtherModule([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StructFromOtherModule.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<StructFromOtherModule>> {
    return phantom(StructFromOtherModule.reified());
  }
  static get p() {
    return StructFromOtherModule.phantom();
  }

  static get bcs() {
    return bcs.struct("StructFromOtherModule", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): StructFromOtherModule {
    return StructFromOtherModule.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): StructFromOtherModule {
    if (!isStructFromOtherModule(item.type)) {
      throw new Error("not a StructFromOtherModule type");
    }

    return StructFromOtherModule.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): StructFromOtherModule {
    return StructFromOtherModule.fromFields(
      StructFromOtherModule.bcs.parse(data),
    );
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

  static fromJSONField(field: any): StructFromOtherModule {
    return StructFromOtherModule.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): StructFromOtherModule {
    if (json.$typeName !== StructFromOtherModule.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return StructFromOtherModule.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): StructFromOtherModule {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStructFromOtherModule(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a StructFromOtherModule object`,
      );
    }
    return StructFromOtherModule.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): StructFromOtherModule {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isStructFromOtherModule(data.bcs.type)
      ) {
        throw new Error(`object at is not a StructFromOtherModule object`);
      }

      return StructFromOtherModule.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StructFromOtherModule.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<StructFromOtherModule> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching StructFromOtherModule object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStructFromOtherModule(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a StructFromOtherModule object`,
      );
    }

    return StructFromOtherModule.fromSuiObjectData(res.data);
  }
}
