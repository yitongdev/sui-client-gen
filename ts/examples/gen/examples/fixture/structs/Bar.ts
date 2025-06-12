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
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isBar(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::fixture::Bar`;
}

export interface BarFields {
  value: ToField<"u64">;
}

export type BarReified = Reified<Bar, BarFields>;

/**
 * Move struct: `Bar`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 */
export class Bar implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::Bar`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Bar.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::Bar`;
  readonly $typeArgs: [];
  readonly $isPhantom = Bar.$isPhantom;

  readonly value: ToField<"u64">;

  private constructor(typeArgs: [], fields: BarFields) {
    this.$fullTypeName = composeSuiType(
      Bar.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::Bar`;
    this.$typeArgs = typeArgs;

    this.value = fields.value;
  }

  static reified(): BarReified {
    return {
      typeName: Bar.$typeName,
      fullTypeName: composeSuiType(Bar.$typeName, ...[]) as `${typeof PKG_V1}::fixture::Bar`,
      typeArgs: [] as [],
      isPhantom: Bar.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Bar.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Bar.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Bar.fromBcs(data),
      bcs: Bar.bcs,
      fromJSONField: (field: any) => Bar.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Bar.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Bar.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Bar.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Bar.fetch(client, id),
      new: (fields: BarFields) => {
        return new Bar([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Bar.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Bar>> {
    return phantom(Bar.reified());
  }
  static get p() {
    return Bar.phantom();
  }

  static get bcs() {
    return bcs.struct("Bar", {
      value: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): Bar {
    return Bar.reified().new({ value: decodeFromFields("u64", fields.value) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Bar {
    if (!isBar(item.type)) {
      throw new Error("not a Bar type");
    }

    return Bar.reified().new({ value: decodeFromFieldsWithTypes("u64", item.fields.value) });
  }

  static fromBcs(data: Uint8Array): Bar {
    return Bar.fromFields(Bar.bcs.parse(data));
  }

  toJSONField() {
    return {
      value: this.value.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Bar {
    return Bar.reified().new({ value: decodeFromJSONField("u64", field.value) });
  }

  static fromJSON(json: Record<string, any>): Bar {
    if (json.$typeName !== Bar.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Bar.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Bar {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBar(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Bar object`);
    }
    return Bar.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Bar {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBar(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Bar object`);
      }

      return Bar.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Bar.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Bar> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Bar object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isBar(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Bar object`);
    }

    return Bar.fromSuiObjectData(res.data);
  }
}
