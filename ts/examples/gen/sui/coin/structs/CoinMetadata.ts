import { String as String1 } from "../../../_dependencies/source/0x1/ascii/structs/index.js";
import { Option } from "../../../_dependencies/source/0x1/option/structs/index.js";
import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { Url } from "../../url/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isCoinMetadata(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::CoinMetadata` + "<");
}

export interface CoinMetadataFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  decimals: ToField<"u8">;
  name: ToField<String>;
  symbol: ToField<String1>;
  description: ToField<String>;
  iconUrl: ToField<Option<Url>>;
}

export type CoinMetadataReified<T extends PhantomTypeArgument> = Reified<
  CoinMetadata<T>,
  CoinMetadataFields<T>
>;

/**
 * Move struct: `CoinMetadata`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class CoinMetadata<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::CoinMetadata`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = CoinMetadata.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::CoinMetadata<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = CoinMetadata.$isPhantom;

  readonly id: ToField<UID>;
  readonly decimals: ToField<"u8">;
  readonly name: ToField<String>;
  readonly symbol: ToField<String1>;
  readonly description: ToField<String>;
  readonly iconUrl: ToField<Option<Url>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: CoinMetadataFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      CoinMetadata.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::CoinMetadata<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.decimals = fields.decimals;
    this.name = fields.name;
    this.symbol = fields.symbol;
    this.description = fields.description;
    this.iconUrl = fields.iconUrl;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): CoinMetadataReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: CoinMetadata.$typeName,
      fullTypeName: composeSuiType(
        CoinMetadata.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::coin::CoinMetadata<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: CoinMetadata.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        CoinMetadata.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CoinMetadata.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => CoinMetadata.fromBcs(T, data),
      bcs: CoinMetadata.bcs,
      fromJSONField: (field: any) => CoinMetadata.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => CoinMetadata.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CoinMetadata.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CoinMetadata.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        CoinMetadata.fetch(client, T, id),
      new: (fields: CoinMetadataFields<ToPhantomTypeArgument<T>>) => {
        return new CoinMetadata([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CoinMetadata.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<CoinMetadata<ToPhantomTypeArgument<T>>>> {
    return phantom(CoinMetadata.reified(T));
  }
  static get p() {
    return CoinMetadata.phantom;
  }

  static get bcs() {
    return bcs.struct("CoinMetadata", {
      id: UID.bcs,
      decimals: bcs.u8(),
      name: String.bcs,
      symbol: String1.bcs,
      description: String.bcs,
      icon_url: Option.bcs(Url.bcs),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): CoinMetadata<ToPhantomTypeArgument<T>> {
    return CoinMetadata.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      decimals: decodeFromFields("u8", fields.decimals),
      name: decodeFromFields(String.reified(), fields.name),
      symbol: decodeFromFields(String1.reified(), fields.symbol),
      description: decodeFromFields(String.reified(), fields.description),
      iconUrl: decodeFromFields(Option.reified(Url.reified()), fields.icon_url),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): CoinMetadata<ToPhantomTypeArgument<T>> {
    if (!isCoinMetadata(item.type)) {
      throw new Error("not a CoinMetadata type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return CoinMetadata.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      decimals: decodeFromFieldsWithTypes("u8", item.fields.decimals),
      name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
      symbol: decodeFromFieldsWithTypes(String1.reified(), item.fields.symbol),
      description: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.description,
      ),
      iconUrl: decodeFromFieldsWithTypes(
        Option.reified(Url.reified()),
        item.fields.icon_url,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): CoinMetadata<ToPhantomTypeArgument<T>> {
    return CoinMetadata.fromFields(typeArg, CoinMetadata.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      decimals: this.decimals,
      name: this.name,
      symbol: this.symbol,
      description: this.description,
      iconUrl: fieldToJSON<Option<Url>>(
        `${Option.$typeName}<${Url.$typeName}>`,
        this.iconUrl,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): CoinMetadata<ToPhantomTypeArgument<T>> {
    return CoinMetadata.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      decimals: decodeFromJSONField("u8", field.decimals),
      name: decodeFromJSONField(String.reified(), field.name),
      symbol: decodeFromJSONField(String1.reified(), field.symbol),
      description: decodeFromJSONField(String.reified(), field.description),
      iconUrl: decodeFromJSONField(
        Option.reified(Url.reified()),
        field.iconUrl,
      ),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): CoinMetadata<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== CoinMetadata.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(CoinMetadata.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return CoinMetadata.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): CoinMetadata<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCoinMetadata(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CoinMetadata object`,
      );
    }
    return CoinMetadata.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): CoinMetadata<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isCoinMetadata(data.bcs.type)
      ) {
        throw new Error(`object at is not a CoinMetadata object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return CoinMetadata.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CoinMetadata.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<CoinMetadata<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CoinMetadata object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCoinMetadata(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CoinMetadata object`);
    }

    return CoinMetadata.fromSuiObjectData(typeArg, res.data);
  }
}
